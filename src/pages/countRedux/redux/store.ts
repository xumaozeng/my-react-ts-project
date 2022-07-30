/**
 * 全局唯一仓库数据store
 */

import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count_reducer";

const store = configureStore({ reducer: countReducer });

export default store;
