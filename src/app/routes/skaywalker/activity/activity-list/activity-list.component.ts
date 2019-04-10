import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { STComponent, STColumn, STData, STChange } from '@delon/abc';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityListComponent implements OnInit {
  q: any = {
    pi: 1,
    ps: 10,
    sorter: '',
    status: null,
    typeIdList: [],
  };
  data: any;
  loading = false;
  typeId = [
    { index: 0, text: '自驾游', value: false, type: 'default', checked: false },
    { index: 1, text: '亲子游', value: false, type: 'default', checked: false },
    { index: 2, text: '户外约伴', value: false, type: 'default', checked: false },
  ];
  @ViewChild('st')
  st: STComponent;
  columns: STColumn[] = [
    { title: '', index: 'key', type: 'checkbox' },
    { title: '活动名称', index: 'activeTitle' },
    { title: '活动类型', index: 'typeId' },
    { title: '活动费用', index: 'charge' },
    { title: '出发地', index: 'startAddressName' },
    { title: '目的地', index: 'endAddressName' },
    {
      title: '出发时间',
      index: 'goTime',
      type: 'date',
      sort: {
        compare: (a: any, b: any) => a.goTime - b.goTime,
      },
    },
    { title: '活动天数', index: 'days' },
    { title: '活动发起人', index: 'nickname' },
    {
      title: '操作',
      buttons: [
        {
          text: '配置',
          click: (item: any) => this.msg.success(`配置${item.no}`),
        },
        {
          text: '订阅警报',
          click: (item: any) => this.msg.success(`订阅警报${item.no}`),
        },
      ],
    },
  ];
  selectedRows: STData[] = [];
  description = '';
  totalCallNo = 0;
  expandForm = false;

  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private modalSrv: NzModalService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get('http://localhost:9998/activity', { count: 5 }).subscribe((res: any) => {
      this.data = res.data.list;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  stChange(e: STChange) {
    switch (e.type) {
      case 'checkbox':
        this.selectedRows = e.checkbox;
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
        this.cdr.detectChanges();
        break;
      case 'filter':
        this.getData();
        break;
    }
  }

  remove() {
    this.http
      .delete('/rule', { nos: this.selectedRows.map(i => i.no).join(',') })
      .subscribe(() => {
        this.getData();
        this.st.clearCheck();
      });
  }

  approval() {
    this.msg.success(`审批了 ${this.selectedRows.length} 笔`);
  }

  add(tpl: TemplateRef<{}>) {
    this.modalSrv.create({
      nzTitle: '新建规则',
      nzContent: tpl,
      nzOnOk: () => {
        this.loading = true;
        this.http
          .post('/rule', { description: this.description })
          .subscribe(() => this.getData());
      },
    });
  }

  reset() {
    // wait form reset updated finished
    setTimeout(() => this.getData());
  }
}
