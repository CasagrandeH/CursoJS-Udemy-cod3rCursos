<template>
    <div class="calculator-item">
        <display-item :value="displayValue" />
        <button-item label="AC" triple @onClick="clearMemory" />
        <button-item label="/" operation @onClick="setOperation" />
        <button-item label="7" @onClick="addDigit" />
        <button-item label="8" @onClick="addDigit" />
        <button-item label="9" @onClick="addDigit" />
        <button-item label="*" operation @onClick="setOperation" />
        <button-item label="4" @onClick="addDigit" />
        <button-item label="5" @onClick="addDigit" />
        <button-item label="6" @onClick="addDigit" />
        <button-item label="-" operation @onClick="setOperation" />
        <button-item label="1" @onClick="addDigit" />
        <button-item label="2" @onClick="addDigit" />
        <button-item label="3" @onClick="addDigit" />
        <button-item label="+" operation @onClick="setOperation" />
        <button-item label="0" double @onClick="addDigit" />
        <button-item label="." @onClick="addDigit" />
        <button-item label="=" operation @onClick="setOperation" />
        
    </div>
</template>

<script>

import DisplayItem from '../components/display-item.vue'
import ButtonItem from '../components/button-item.vue'


export default {
    data: function () {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: { DisplayItem, ButtonItem },
    methods: {
        clearMemory () {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation (operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                    if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
                        this.clearMemory()
                        return
                    }
                    
                } catch (err) {
                    this.$emit('onError', err)
                }

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals 
            }
        },
        addDigit (n) {
            if (n === "." && this.displayValue.includes(".")) return

            const clearDisplay = this.displayValue == 0 || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false

            if (n !== ".") {
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        }
    }
}
</script>

<style>
.calculator-item {
    width: 265px;
    height: 375px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr repeat(6, 48px);
}
</style>