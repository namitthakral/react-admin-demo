import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (props) => {
    return(
        <Edit title='Edit User' {...props}>
            <SimpleForm>
                <TextInput source='id' disabled />    
                <TextInput source='name' />
                <TextInput source='email'/>
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit;