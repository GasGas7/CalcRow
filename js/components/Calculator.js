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
            if (!current.isEnabled || isNaN(current.input)) return tot;

            tot += current.operator === "+" ? parseFloat(current.input) : -parseFloat(current.input)
            console.log("tot>>>>>", tot)
            return tot;
        }

        const result = this.state.rows.reduce(sum, 0);
        console.log("result", result)

        this.setState({ total: result });
    };

    render() {
        return (
            <div className="container-fluid d-flex calc-row-container">
                <div className="row w-100">
                    <div className="sidebar-row col-5 d-flex flex-column justify-content-center align-content-center">
                        <div className="sidebar-menu-logo col-12 d-flex flex-column justify-content-center">
                            <div className="d-flex flex-column justify-items-center align-items-center">
                                <div className="logo p-0 m-auto col-10 offset-1 text-center">
                                    <img src="https://cdn.icon-icons.com/icons2/195/PNG/256/Calculator_23635.png" alt="image-logo-calculator" />
                                </div>
                                <div className="app-calc-placeholder p-0 m-auto col-10 offset-1 text-center">
                                    <p>
                                        Calculator-Row App
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="calculator d-flex flex-column justify-content-center align-content-center col-7">
                        <div className="calculator-container">
                            <div className="btn-row d-flex justify-content-around my-3">
                                <button className="add-row-btn" onClick={this.addRow}>Aggiungi Riga</button>
                                <button className="rm-row-btn" onClick={this.rmRow}>Rimuovi Riga</button>
                            </div>
                            <div className="row-components">
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
                            </div>

                        </div>
                        <div className="results my-5 text-center">
                            Risultato: <span>{this.state.total}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}