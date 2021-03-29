import {reactive, computed} from "vue";
import {CounterModel} from "../../types/counter";

const CountEffect = (defaultValue: number = 0) => {
    const state: CounterModel = reactive<CounterModel>({
        value: defaultValue,
        name: computed(() => `counter: ${state.value}`)
    })
    const increment = (payload: number = 1) => {
        state.value += payload
    }
    return {state, increment}
}

export default CountEffect
