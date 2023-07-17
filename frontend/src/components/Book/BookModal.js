import { Modal, Button } from "react-bootstrap"

const BookModal = ({ show, handleClose, data }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data.imageLink && <img className="modal-image" alt="Book Cover" src={data.imageLink}></img>}
                    {data.subTitle && <div>{data.subTitle}</div>}
                    <b>Author: </b>{data.author}<br />
                    <b>Publisher: </b>{data.publisher}<br />
                    <b>Published Date: </b>{data.publishedDate}<br />
                    <div className="modal-description"><br /><b>Description:</b><br />{data.description}<br /></div>
                    <br /><b>Page count: </b>{data.pageCount}<br />
                    {data.genres}<br />
                    <br /><b>Average rating: </b>{data.averageRating}<br />
                    <b>Number of ratings: </b>{data.ratingsCount}<br />
                    <b>Maturity Rating: </b>{data.maturityRating}<br />
                    <b>Language: </b>{data.language}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default BookModal