class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleRaw = () => {
        const { isEnabled } = this.props.row;
        const toggledValue = !isEnabled;
        this.props.onToggle(this.props.index, toggledValue);
    };

    inputChange = (e) => {
        const { value } = e.target;
        const inputValue = isNaN(value) || value === "" ? 0 : parseFloat(value);
        this.props.onInputChange(this.props.index, inputValue);
    };

    selectChange = (e) => {
        const { value } = e.target;
        this.props.onSelectChange(this.props.index, value);
    };

    render() {
        const { inputValue, operator, isEnabled } = this.props.row;

        return (
            <div className="row">
                <button className="toggleButton" onClick={this.toggleRaw}>
                    {isEnabled ? "Disabilita" : "Abilita"}
                </button>
                <input
                    className="input-number"
                    type="text"
                    value={inputValue}
                    disabled={!isEnabled}
                    onChange={this.inputChange}
                />
                <select className="select-op" value={operator} onChange={this.selectChange} disabled={!isEnabled}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
            </div>
        );
    }
};