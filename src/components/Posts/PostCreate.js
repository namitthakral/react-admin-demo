import { Create,DateInput,SimpleForm, TextInput } from "react-admin";

const PostCreate = (props) => {
    return(
        <Create title='Create Post' {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput source='body'/>
                <DateInput label='Published' source='publishedAt' />
            </SimpleForm>
        </Create>
    )
}

export default PostCreate;