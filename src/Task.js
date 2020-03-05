import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fff;
`;

const Task = props => {
  return (
    // Index is required
    <Draggable draggableId={props.task.id} index={props.index}>
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          //  Where you use to drag
          {...provided.dragHandleProps}
        >
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
