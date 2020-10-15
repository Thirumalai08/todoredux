import React, {Component} from 'react'
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
//import {v1 as uuid} from 'uuid'
import {connect} from 'react-redux'
import {getItems,deleteItems,editItems} from '../actions/itemActions'
import PropTypes from 'prop-types'
import ItemModal from './ItemModal'
//import EditModal from './EditModal'

class List extends Component {
    componentDidMount(){
        this.props.getItems()
    }
    onDeleteClick = (id) => {
        this.props.deleteItems(id)
    }
    /*onEditClick = (id) => {
        this.props.editItems(id)
    }*/
    render() {
        
        const {items} = this.props.item
        return(
            <Container>
                <ItemModal />
                {/*<Button color="dark" style={{marginTop:'2rem'}} onClick={()=>{
                    const name = prompt('Enter item')
                    if(name){
                        this.setState(state=>({items:[...state.items,{id:uuid(),name}]}))
                    }
                }}>Add</Button>*/}
                <ListGroup style={{marginTop:'2rem'}}>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id,name})=>(
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this,_id)}
                                    >&times;</Button>
                                    {/*
                                    <EditModal 
                                    onClick = {this.onEditClick.bind(this,_id)}
                                    />*/}
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

List.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps,{getItems,deleteItems})(List) //editItems