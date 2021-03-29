import {reactive, computed, ComputedRef} from "vue";

export interface CounterModel {
    value: number,
    name: ComputedRef<string> | string,
}
