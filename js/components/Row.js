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

            <div className="row-container d-flex justify-content-center align-items-center">
                <div className="col-3">
                    <button className="toggleButton" onClick={this.toggleRaw}>
                        {isEnabled ? "Disabilita" : "Abilita"}
                    </button>
                </div>
                <div className="col-6">
                    <input
                        className="input-number form-control"
                        type="number"
                        value={inputValue}
                        disabled={!isEnabled}
                        onChange={this.inputChange}
                    />
                </div>
                <div className="col-3">
                    <select className="select-op form-control text-center" value={operator} onChange={this.selectChange} disabled={!isEnabled}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                </div>
            </div>

        );
    }
};