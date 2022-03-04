/* eslint-disable import/no-anonymous-default-export */
import request from "../axios/index";

export default {
  getMajorList() {
    return request({
      url: `/major/list`,
    });
  },
  getMajorDetail(clubId: number) {
    return request({
      url: `/major/${clubId}`,
    });
  },
};
