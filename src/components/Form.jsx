import { Component } from "react";
import './Form.css';
import debounce from 'lodash.debounce'; // ЧТО, ИИ ИМПОРТИРОВАЛ БИБЛИОТЕКУ КАК Я ПРОСИЛ, Я В ЗАПОЙ ОТ СЧАСТЬЯ

class Form extends Component {
    state = {
        inputValue: ''
    };

    constructor(props) {
        super(props);
        // Создаем дебаунс функцию для takeV
        this.debouncedTakeValue = debounce(this.props.takeV, 500);
    }

    handleInputChange = (event) => {
        const newValue = event.target.value;
        this.setState({ inputValue: newValue });
        this.debouncedTakeValue(newValue); // Вызываем дебаунс функцию
    };

    render() {
        return (
            <input
                type="text"
                className="input"
                placeholder="Type to search..."
                value={this.state.inputValue}
                onChange={this.handleInputChange}
            />
        );
    }
}

export default Form;