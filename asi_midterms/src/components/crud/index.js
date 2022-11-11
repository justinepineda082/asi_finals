import React from "react";
import { Link } from "react-router-dom";
import StartFirebase from "../firebaseConfig/index";
import { ref, set, get, update, remove, child } from "firebase/database";
import './index.css';

export class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: "",
            id: "",
            firstName: "",
            lastName: "",
            field: "",
        }

        this.interface = this.interface.bind(this);
    }

    componentDidMount() {
        this.setState({
            db: StartFirebase()
        });
    }
    
    render() {
        let url ="http://localhost:3000/";
        return (
            <>
            <h1>ASI Midterms</h1>
            <h2>CS-402</h2>
            <h3>Doctor's Information</h3>
            <p>_______________________________________________________________________________________________________________</p>
                <label>ID</label>
                <input type='text' id='userbox' value={this.state.id}
                    onChange={e => { this.setState({ id: e.target.value }); }} />
                <br></br>

                <label>First Name</label>
                <input type='text' id='userbox' value={this.state.firstName}
                    onChange={e => { this.setState({ firstName: e.target.value }); }} />
                <br></br>

                <label>Last Name</label>
                <input type='text' id='userbox' value={this.state.lastName}
                    onChange={e => { this.setState({ lastName: e.target.value }); }} />
                <br></br>

                <label>Field</label>
                <input type='text' id='userbox' value={this.state.field}
                    onChange={e => { this.setState({ field: e.target.value }); }} />
                <br></br>

                <button id='insertBtn' onClick={this.interface}>Add Data</button>
                <button id='updateBtn' onClick={this.interface}>Update Data</button>
                <button id='deleteBtn' onClick={this.interface}>Delete Data</button>
                <button id='selectBtn' onClick={this.interface}>Read Data</button>
                <p>_______________________________________________________________________________________________________________</p>

                <h5>Members:</h5>
                <p>Datu, Allen Stephen N.</p>
                <p>Fernandez, Jonah S.</p>
                <p>Lugtu, Jonas Rafael B.</p>
                <p>Pineda, Justine Gabriel Y.</p>

                <button><Link to='/'>Sign out</Link></button>
            </>
        )
    }
    
    interface(event) {
        const id = event.target.id;

        if (id == 'insertBtn') {
            this.insertData();
        }

        else if (id == 'updateBtn') {
            this.updateData();
        }

        else if (id == 'deleteBtn') {
            this.deleteData();
        }

        else if (id == 'selectBtn') {
            this.selectData();
        }
    }

    getAllInputs() {
        return {
            studentID: Number(this.state.id),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            section: this.state.field
        }
    }
    insertData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        set(ref(db, 'Doctors/' + data.id),
            {
                firstName: data.firstName,
                lastName: data.lastName,
                section: data.field
            })
            .then(() => { alert('data was added successfully') })
            .catch((error) => { alert("there was an error, details: " + error) });
    }

    updateData() {
        const db = this.state.db;
        const data = this.getAllInputs();

        update(ref(db, 'Doctors/' + data.id),
            {
                firstName: data.firstName,
                lastName: data.lastName,
                section: data.field
            })
            .then(() => { alert('data was update successfully') })
            .catch((error) => { alert("there was an error, details: " + error) });

    }

    deleteData() {
        const db = this.state.db;
        const id = this.getAllInputs().id;

        remove(ref(db, 'Doctors/' + id))
            .then(() => { alert('data was delete successfully') })
            .catch((error) => { alert("there was an error, details: " + error) });

    }

    selectData() {
        const dbref = ref(this.state.db);
        const id = this.getAllInputs().id;

        get(child(dbref, 'Doctors/' + id)).then((snapshot) => {
            if (snapshot.exists()) {
                this.setState({
                    firstName: snapshot.val().firstName,
                    lastName: snapshot.val().lastName,
                    section: snapshot.val().field
                })
            }
            else{
                alert("no data found!");
            }
        })
        .catch((error)=>{alert("there was an error, details: "+error)});
    }
}
