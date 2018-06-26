/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader } from 'reactstrap';
import { toggleModal } from '../actions/index';

class ErrorModal extends React.Component {
	render() {
		return (
			<div>
				<Modal
					isOpen={this.props.modalOpen}
					toggle={this.props.toggleModal}
					className={this.props.className}
				>
					<ModalHeader className="m-auto" toggle={this.toggle}>
						City Not Found
					</ModalHeader>
				</Modal>
			</div>
		);
	}
}

function mapStateToProps({ modalOpen }) {
	return { modalOpen };
}

export default connect(
	mapStateToProps,
	{ toggleModal }
)(ErrorModal);
