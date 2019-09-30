import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  textLine: {
    textDecoration: "line-through",
    fontSize: "20px"
  },
  textTodo: {
    textDecoration: "none",
    fontSize: "20px"
  }
});

class Todo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ListItem
        key={this.props.todo.id}
        dense
        button
        onClick={() => this.props.handleToggle(this.props.todo.id)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={this.props.todo.completed}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          id={this.props.todo.id}
          classes={{
            primary: this.props.todo.completed
              ? classes.textLine
              : classes.textTodo
          }}
          primary={this.props.todo.task}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            onClick={() => this.props.handleDelete(this.props.todo.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default withStyles(styles)(Todo);
