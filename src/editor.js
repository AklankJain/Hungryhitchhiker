
import React , {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import RichTextEditor from 'react-rte';
import { Editor } from '@tinymce/tinymce-react';
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

  handleEditorChange = (e) => {
    // console.log('Content was updated:', e.target.getContent());
    ti = e.target.getContent()
    console.log(ti)
  }

  handleDeleteSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(['titled' , 'tagged'],(err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.put('https://server-try.herokuapp.com/api/delete/', {titled: values.titled, tagged: values.tagged})
        .then(response => {
          console.log(response);
          alert("Removed Successfully")
            })
          .catch(error => {
             console.log(err);
            });      
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(['title' , 'tags' ] , (err, values) => {
      if (!err) {
        var key = values.title + values.tags
        console.log(key)
        console.log(ti);
        console.log('Received values of form: ', values);
        axios.put('https://server-try.herokuapp.com/api/update', {title: values.title,content: ti , tags: values.tags,key: key})
        .then(response => {
          console.log(response);
          alert("Submitted")
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
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak',
    'searchreplace wordcount visualblocks visualchars code fullscreen',
    'insertdatetime media nonbreaking save table contextmenu directionality',
    'emoticons template paste textcolor colorpicker textpattern imagetools'
    ],

          toolbar: 'undo redo | bold italic underline | alignleft aligncenter alignright | code',
          image_advtab: true,
          content_css: ['//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
    '//www.tinymce.com/css/codepen.min.css'
   ]
        }}
        onChange={this.handleEditorChange}
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
          label="Tag"
        >
          {getFieldDecorator('tags' , {rules: [{
              required: true, message: 'Please input the content!',
            }],
          })(
            <RadioGroup>
              <RadioButton value="hungry_rides">Hungry Rides</RadioButton>
              <RadioButton value="food_walks">Hiker's Diary</RadioButton>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>

      <h1> To remove a post, give it's title here. </h1>
      <Form onSubmit={this.handleDeleteSubmit}>
      <FormItem
          {...formItemLayout}
          label="Title"
        >
          {getFieldDecorator('titled', {
            rules: [{
              required: true, message: 'Please input the title',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Tagged"
        >
          {getFieldDecorator('tagged' , {rules: [{
              required: true, message: 'Please input the content!',
            }],
          })(
            <RadioGroup>
              <RadioButton value="hungry_rides">Hungry Rides</RadioButton>
              <RadioButton value="food_walks">Hiker's Diary</RadioButton>
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