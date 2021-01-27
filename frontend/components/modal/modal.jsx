import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateBillContainer from '../dashboard/bill/create_bill_container';
import AddFriendContainer from '../dashboard/friend/add_friend_container';
import EditBillContainer from '../dashboard/bill/edit_bill_container';
// import SettleContainer from '../dashboard/centerDashboard/settle_container';

function Modal({ modal, closeModal }) {
    if (!modal) { return null; }
    let component;
    switch (modal.modal) {
        case 'create-bill':
            component = <CreateBillContainer
                authorId={modal.authorId}
            />
            break;
        case 'edit-bill':
            component = <EditBillContainer bill={modal.bill} />
            break;
        case ('add-friend'):
            component = <AddFriendContainer />
            break; 
        case 'settle':
            component = <SettleContainer />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e =>e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mSTP = state => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal);