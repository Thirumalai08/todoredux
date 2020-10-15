import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap'
import {editItems} from '../actions/itemActions'

class EditModal extends Component {
    state = {
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    // edit submit 
    onEditSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            //id: uuid(),
            name: this.state.name
        }
        // add via additem action
        this.props.editItems(newItem)
        // close modal
        this.toggle()
    }
    render() {
        return (
            <div>
                <Button
                color="dark"
                style={{marginTop:'2rem'}}
                onClick={this.toggle}
                >
                    Edit Item
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                 <ModalHeader
                    toggle={this.toggle}
                >
                Edit List</ModalHeader>
                    <ModalBody>
                        <Form 
                        onSubmit={this.onEditSubmit}
                        >
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input type="text" name="name" id="item" placeholder="Enter Items" onChange={this.onChange} />
                            <Button color="dark" style={{marginTop:'2rem'}} block>Edit List</Button>
                        </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
})
export default connect(mapStateToProps,{editItems})(EditModal)