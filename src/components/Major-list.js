import { Table, Dropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Major-list.css";

function MajorList(props) {
    return (
        <>
            <div className="major">
                <Button variant="primary" type="submit" className="add-major-button">
                    <FontAwesomeIcon icon="plus-circle" className="major-add" /> Add
                </Button>
                <Table>
                    <thead>
                        <tr>
                            <th>Major</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{props.major}</th>
                            <th>{props.img}</th>
                            <th className="action-col">
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-custom-components">
                                        <FontAwesomeIcon icon="ellipsis-h" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">EDIT</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">DELETE</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default MajorList;