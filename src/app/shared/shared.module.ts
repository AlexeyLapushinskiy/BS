import { NgModule } from '@angular/core';
import { mainFunc } from '@ui-guys/stencil-bs-ui-lib/dist/index.js';

import {
  LodashChunkPipe, LodashFilterPipe, LodashFindPipe, LodashGetPipe,
  LodashGroupByPipe, LodashKeysPipe, LodashMapPipe, LodashSizePipe, LodashSortByPipe
} from './utility/pipes/lodash.pipes';


@NgModule({
  imports: [ mainFunc ],
  declarations: [
    mainFunc,
    LodashMapPipe,
    LodashGetPipe,
    LodashFilterPipe,
    LodashFindPipe,
    LodashSizePipe,
    LodashGroupByPipe,
    LodashSortByPipe,
    LodashChunkPipe,
    LodashKeysPipe,
  ],
  exports: [
    mainFunc,
    LodashMapPipe,
    LodashGetPipe,
    LodashFilterPipe,
    LodashFindPipe,
    LodashSizePipe,
    LodashGroupByPipe,
    LodashSortByPipe,
    LodashChunkPipe,
    LodashKeysPipe,
  ],
  providers: []
})
export class SharedModule { }
