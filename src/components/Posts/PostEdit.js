import { Edit,DateInput,SimpleForm, TextInput } from "react-admin";

const PostEdit = (props) => {
    return(
        <Edit title='Edit Post' {...props}>
            <SimpleForm>
                <TextInput source='id' disabled />    
                <TextInput source='title' />
                <TextInput source='body'/>
                <DateInput label='Published' source='publishedAt' />
            </SimpleForm>
        </Edit>
    )
}

export default PostEdit;