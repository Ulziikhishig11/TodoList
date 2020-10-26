import React, { Component } from "react";
import TodoItems from "./TodoItems";
import { Button, Form, Card } from "react-bootstrap"

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div class="row h-100 justify-content-center">
                <Card >
                    <Card.Body>
                        <Form onSubmit={this.addItem}>
                            <Form.Control ref={(a) => this._inputElement = a} placeholder="task" />
                            <Button type="submit">add</Button>
                        </Form>
                        <TodoItems entries={this.state.items}
                            delete={this.deleteItem} />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default TodoList;