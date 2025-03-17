import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService {
  static buildLimitOffset(query, options, limitDefault = 10) {
    if(typeof options.count != 'undefined' && options.count <= 0) return options;

    let currentPage = query.page || 1;
    let limit = query.views ? parseInt(query.views) : limitDefault;
    let offset = (currentPage - 1) * limit;
    let offsetChange = query.offset_change ? parseInt(query.offset_change) : 0;

    offset = offset + offsetChange;

    options = Object.assign(options, {skip: offset, take: limit});

    return options;
  }

  static buildFilterWhere(fieldNames, req, options, fieldNameParams = []) {
    if(typeof options.where != 'object') {
      options.where = {};
    }

    fieldNames.forEach((fieldName, index) => {
      const fieldNameParam = fieldNameParams[index] ? fieldNameParams[index] : fieldName;
      const fieldValue = req.query[fieldNameParam];

      if(fieldValue && typeof fieldValue == 'string' && fieldValue != 'all') {
        options.where = Object.assign(options.where, {
          [fieldName]: { in: fieldValue.split(',') }
        });
      }
    });

    return options;
  }
}
