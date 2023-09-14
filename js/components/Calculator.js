class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [{ input: 0, operator: '+', isEnabled: true }],
            total: 0
        };
    }

    addRow = () => {
        this.setState((prevState) => {
            return {
                rows: [...prevState.rows, { input: 0, operator: '+', isEnabled: true }]
            }
        })
    };

    rmRow = () => {
        if (this.state.rows.length <= 1) return;

        this.setState((prevState) => {
            const newRows = [...prevState.rows];
            newRows.pop();
            return { rows: newRows };
        }, this.totalCalc)
    };

    onToggleRow = (index, value) => {
        this.setState((prevState) => {
            const newRows = prevState.rows.map((row, k) => {
                if (k != index) return row;

                row.isEnabled = value;
                return row;
            })
            return { rows: newRows }
        }, this.totalCalc)
    }

    onInputChange = (index, value) => {
        this.setState((prevState) => {
            const newRows = prevState.rows.map((row, k) => {
                if (k != index) return row;

                row.input = value;
                return row;
            })
            return { rows: newRows }
        }, this.totalCalc);
    };

    onSelectChange = (index, value) => {
        this.setState((prevState) => {
            const newRows = prevState.rows.map((row, k) => {
                if (k != index) return row;

                row.operator = value;
                return row;
            })
            return { rows: newRows }
        }, this.totalCalc);
    };

    totalCalc = () => {
        const sum = (tot, current) => {
            if (isNaN(current.input)) return tot;

            tot += current.operator === "+" ? parseFloat(current.input) : -parseFloat(current.input)
            console.log("tot>>>>>",tot)
            return tot;
        }

        const result = this.state.rows.reduce(sum, 0);
        console.log("result", result)

        this.setState({ total: result });
    };

    render() {
        return (
            <div className="calculator">
                <button onClick={this.addRow}>Aggiungi Riga</button>
                <button onClick={this.rmRow}>Rimuovi Riga</button>
                {this.state.rows.map((row, index) => (
                    <Row
                        key={index}
                        row={row}
                        index={index}
                        onInputChange={this.onInputChange}
                        onSelectChange={this.onSelectChange}
                        onToggle={this.onToggleRow}
                    />
                ))}
                <div>
                    Risultato: <span>{this.state.total}</span>
                </div>
            </div>
        );
    }
}