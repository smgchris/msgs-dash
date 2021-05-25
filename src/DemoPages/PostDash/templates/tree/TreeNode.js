import React, {useState,Fragment} from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import last from 'lodash/last';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Row, Col, CardFooter,
  CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText, Button,
} from 'reactstrap';

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 20;
  if (type === 'file') paddingLeft += 20;
  return paddingLeft;
}

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 8px;
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;
  &:hover {
    background: lightgray;
  }
`;

const StyledNodeLabel = styled.div`
  display: flex;
  flex-direction: row;
  cursor:pointer;
`;

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

const getNodeLabel = (node) => node.tag;

const TreeNode = (props) => {
  const { node, getChildNodes, level, onToggle, onNodeSelect, onNodeChoose } = props;

 const [hovered,setHovered] = useState(false);

 const handleMouseOver = () =>  {setHovered(!hovered)} ;

 if (typeof(node) === 'undefined' ) {
  return <div></div>
}


  return (
    <React.Fragment>
      <StyledTreeNode level={level} type={node.type}>
        <NodeIcon onClick={() => onToggle(node)}>
          {node.type === 'folder' && (node.isOpen ? <FaChevronDown /> : <FaChevronRight />)}
        </NodeIcon>

        <NodeIcon marginRight={10}>
          {node.type === 'file' && <FaFile />}
          {node.type === 'folder' && node.isOpen === true && <FaFolderOpen />}
          {node.type === 'folder' && !node.isOpen && <FaFolder />}
        </NodeIcon>

        <StyledNodeLabel  onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
          {hovered?<Fragment><span onClick={() => onToggle(node)}>{' '+getNodeLabel(node)}</span> {' '} <Button variant="success" onClick={()=>onNodeChoose(node)}>Select</Button> </Fragment>
          :<span role="button" onClick={() => onNodeSelect(node)} >
             {getNodeLabel(node)}
            </span>
            }

        </StyledNodeLabel> 
       




      </StyledTreeNode>

      { node.isOpen && getChildNodes(node).map(childNode => (
        <TreeNode
          {...props}
          node={childNode}
          level={level + 1}
        />
      ))
      }

    </React.Fragment>
  );
}

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getChildNodes: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onNodeSelect: PropTypes.func.isRequired,
};

TreeNode.defaultProps = {
  level: 0,
};

export default TreeNode;