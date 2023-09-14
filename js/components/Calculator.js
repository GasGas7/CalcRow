class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [{ input: 0, operator: '+', isenabled: true }],
            total: 0
        };
    }

    addRow = () => {
        this.setState((prevState) => {
            return {
                rows: [...prevState.rows, { input: 0, operator: '+', isenabled: true }]
            }
        })
    };

    rmRow = () => {
        if (this.state.rows.length <= 1) return;

        this.setState((prevState) => {
            const newRows = [...prevState.rows];
            newRows.pop();
            return { rows: newRows };
        })
    };

    inputChange = () => {
    };

    selectChange = () => {
    };

    totalCalc = () => {
    };

    render() {
        return (
            <div className="calculator">
                <button onClick={this.addRow}>Aggiungi Riga</button>
                <button onClick={this.rmRow}>Rimuovi Riga</button>

                <Row
                    key
                    index
                    onInputChange
                    onSelectChange
                />

                <div>
                    Risultato: <span></span>
                </div>
            </div>
        );
    }
}