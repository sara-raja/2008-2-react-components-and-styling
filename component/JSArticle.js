import { NEXT_JS_COOL_SITES } from "../nextjsSiteList"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';


export default function JSArticle(){
    return <List>
        {NEXT_JS_COOL_SITES.map((jsSite, index)=>{
            return <ListItem key={index}><a href={jsSite.url}><Typography variant="body1" component="body1" color="primary">{jsSite.name}</Typography></a></ListItem>
        })}
    </List>
}