import { Component } from '@angular/core';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-activity-list-create',
  templateUrl: './create.component.html',
})
export class ActivityListCreateComponent {
  record: any = {};
  schema: SFSchema = {
    properties: {
      activeTitle: { type: 'string', title: '活动名称', maxLength: 50 },
      typeId: {
        type: 'string',
        title: '活动类型',
        enum: [
          { value: '0', label: '自驾游' },
          { value: '1', label: '亲子游' },
          { value: '2', label: '户外约伴' },
        ],
      },
      charge: { type: 'number', title: '活动费用' },
      startAddressName: { type: 'string', title: '出发地', maxLength: 50 },
      endAddressName: { type: 'string', title: '目的地', maxLength: 50 },
      goTime: { type: 'string', title: '出发时间', format: 'date'  },
      days: { type: 'string', title: '活动天数' },
      subDescription: {
        type: 'string',
        title: '活动描述',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        },
      },
    },
    required: ['activeTitle', 'typeId', 'charge', 'startAddressName', 'endAddressName', 'goTime', 'days'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService) {
  }

  save(value: any) {
    this.msgSrv.success('保存成功');
    this.modal.close(value);
  }

  close() {
    this.modal.destroy();
  }
}
