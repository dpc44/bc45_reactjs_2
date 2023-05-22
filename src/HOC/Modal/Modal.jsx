import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const {item} = this.props;
    // console.log('modal: ', this.props);
    return (
        <div>
           
            {/* Modal */}
            <div className="modal fade" id={`modelId${item.id}`} tabIndex={-1} role="dialog" aria-labelledby="                                                        " aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document" key={item.id}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-4'>
                                    <img src={item.image} alt="..." width={'100%'}/>
                                </div>
                                <div className='col-8'>
                                    <h2>{item.name}</h2>
                                    <h3>{item.price}</h3>
                                    <h3>Quantity: {item.quantity}</h3>
                                    <p>{item.description}</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

