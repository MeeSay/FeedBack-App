import { useState } from 'react'
import React from 'react'
import Card
 from './share/Card'
import Button from './share/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
    const[text,setText] = useState('')
    const[rating,setrating] = useState(10)
    const[btnDisabled,setBtnDisabled] = useState(true)
    const[message,setMessage] = useState('')

    const handleTextChange = (e) =>{
        if(text === '')
            {
                setBtnDisabled(true)
                setMessage(null)
            }else if(text !== '' && text.trim().length <= 10){
                setBtnDisabled(true)
                setMessage('Text must be at least 10 characters')
            }else{
                setMessage(null)
                setBtnDisabled(false)
            }
        setText(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback ={
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select ={(rating) => console.log(rating)}/>
            <div className="input-group">
                <input 
                onChange={handleTextChange} 
                type='text' 
                placeholder='Write a review'
                value={text}></input>
                <Button type='submit' isDisable={btnDisabled}>
                    Send
                </Button>
            </div>
            {message &&<div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm