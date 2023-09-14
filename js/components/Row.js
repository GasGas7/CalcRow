class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleRaw = () => {

    };

    inputChange = () => {

    };

    selectChange = () => {

    };

    render() {
        return (
            <div className="row">
                <button onClick>
                    ABILITA/DISABILITA ROW
                </button>
                <input
                    type="text"
                    value="0"
                    disabled="false"
                />
                <select value="+/-" onChange disabled="false">
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
            </div>
        );
    }
}