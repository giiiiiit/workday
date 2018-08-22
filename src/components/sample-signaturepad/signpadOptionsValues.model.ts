import { tabOptionss } from './tabOptionss.model'
export class signpadOptionsValues {
    public signpadOptionsValues: {
        tabOptions: tabOptionss,
        tabStatus: boolean,
        minWidth: number, // 笔锋 float
        maxWidth: number, // 粗细 float
        throttle: number, // default 16 每秒绘制的次数,越细腻 int
        canvasHeight: number,
        canvasWidth: number,
        penColor: string, // 画笔颜色
        backgroundColor: string // 背景颜色
    }
    constructor() {
    }
} 