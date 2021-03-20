import { Table, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as actions from '../store/majors';
import './Major-list.css';

function MajorList() {
    const majorList = useSelector(state => state.majors);
    const dispatch = useDispatch();
    const mList = majorList.list;

    useEffect(() => {
        dispatch(actions.getList());
    }, [])

    console.log('majorList: ', majorList.list); //result
    console.log('mList: ', mList);
    const majors = mList.map((major) =>
        <tr key={major.id}>
            <th>{major.name}</th>
            <th><img src={major.image} alt="logo"/></th>
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
    )
    console.log('majors: ', majors);

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Major</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {majors}
                </tbody>
            </Table>
        </>
    )
}

export default MajorList;