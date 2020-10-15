import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap'
//import {v1 as uuid} from 'uuid'
import {addItems} from '../actions/itemActions'

class ItemModal extends Component {
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
    onSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            //id: uuid(),
            name: this.state.name
        }
        // add via additem action
        this.props.addItems(newItem)
        // close modal
        this.toggle()
    }
    
    render(){
        return(
            <div>
                <Button
                color="dark"
                style={{marginTop:'2rem'}}
                onClick={this.toggle}
                >
                    Add Item
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader
                    toggle={this.toggle}
                    >
                    Add To List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="Enter Items" onChange={this.onChange} />
                                <Button color="dark" style={{marginTop:'2rem'}} block>Add To List</Button>
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
export default connect(mapStateToProps,{addItems})(ItemModal)