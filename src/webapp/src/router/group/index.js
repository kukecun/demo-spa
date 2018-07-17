
// 数据总览
import data from './data';

// 停车场管理
import parking from './parking';

// 发布管理
import release from './release';

// 任务管理
import task from './task';

export default {
  "/berth/data": data.data,
  "/berth/parking": parking.parking,
  "/berth/task": task.task,
  "/berth/release": release.release,
};
