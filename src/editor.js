
import React , {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import RichTextEditor from 'react-rte';
import './app.css'
import axios from 'axios'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

var ti = ""
class RegistrationForm extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  };
  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
         value.toString('html')
      );
      console.log(value);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        var key = values.title + values.tags
        console.log(key)
        console.log('Received values of form: ', values);
        console.log(this.state.value.toString('html'));
        axios.put('https://server-try.herokuapp.com/api/update', {title: values.title,content: this.state.value.toString('html'),tags: values.tags,key: key})
        .then(response => {
          console.log(response);
            })
          .catch(error => {
             console.log(err);
            });      
      }
    });
  }


  render() {
    console.log(ti)
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 20 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 20,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div>
       <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Title"
        >
          {getFieldDecorator('title', {
            rules: [{
              required: true, message: 'Please input the title',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Body"
        >
          {getFieldDecorator('content', {
            rules: [{
              required: true, message: 'Please input the content!',
            }],
          })(
            <TextArea placeholder="Enter the content here" autosize={{ minRows: 4, maxRows: 60 }} />
          )}
        </FormItem>
         <FormItem
          {...formItemLayout}
          label="Tag"
        >
          {getFieldDecorator('tags' , {rules: [{
              required: true, message: 'Please input the content!',
            }],
          })(
            <RadioGroup>
              <RadioButton value="hungry_rides">Hungry Rides</RadioButton>
              <RadioButton value="food_walks">Hiker's Diary</RadioButton>
              <RadioButton value="about">About</RadioButton>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);


class MyEditor extends React.Component {
  render(){
    return( 
      <div id = "editor">
      <h1> content Form </h1>
     <WrappedRegistrationForm />
     </div>
    )
}
}



export default MyEditor