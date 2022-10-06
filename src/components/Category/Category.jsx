import React, { Component } from 'react';
import './Category.css';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

import MealContext from "../../context/MealContext";
import { Eco } from '@material-ui/icons';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    Checkbox: {
        flexGrow: 1,
        color: '#5D38DB',
        '&$checked': {
            color: '#5D38DB',
        },
    },
    checked: {},
});

class Category extends Component{
    isChecked=(categoryName, selectedCategoryName)=>{
        if(categoryName === selectedCategoryName)
        return "selected-category";
    else
        return "";
}


}