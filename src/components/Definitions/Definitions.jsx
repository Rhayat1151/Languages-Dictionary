

import React from 'react'
import './Definitions.css'

const Definitions = ({ word, meanings, category , LightMode}) => {

  return (
    <div className='meanings'>
      {/* {meanings?.length > 0 && 
       word && 
       category === "en" && 
       meanings[0]?.phonetics?.length > 0 && 
       meanings[0]?.phonetics[0]?.audio && (
        <audio 
          src={meanings[0].phonetics[0].audio}
          style={{ 
            
            backgroundColor: "#fff", 
            borderRadius: "10px", 
            margin: "10px 20px",
            width: "100%",
            maxWidth: "400px"
          }}
          controls
          preload="metadata"
        >
          Your browser doesn't support the audio element.
        </audio>
      )} */}

      {/* Alternative: Show all available audio sources */}
      {meanings?.length > 0 && 
       word && 
       category === "en" && 
       meanings[0]?.phonetics?.length > 0 && (
        <div>
          {meanings[0].phonetics.map((phonetic, index) => (
            phonetic.audio && (
              <audio 
                key={index}
                src={phonetic.audio}
                style={{ 
                  backgroundColor: "#fff", 
                  borderRadius: "10px", 
                  margin: "10px 20px",
                  width: "100%",
                  maxWidth: "400px",
                  display: "block"
                }}
                controls
                preload="metadata"
              >
                Your browser doesn't support the audio element.
              </audio>
            )
          ))}
        </div>
      )}
      
      {word === "" ? (
        <span className='subTitle'>Start by typing a word in search</span>
      ) : (
        meanings?.map((mean) =>
          mean.meanings?.map((item) =>
            item.definitions?.map((def, idx) => (
              <div
                key={idx}
                className="singleMeaning"
                style={{
                  backgroundColor:LightMode ? "#3b5360" : 'white',
                  color: LightMode ? 'white' : 'black',
                  padding: "10px 20px",
                  borderRadius: "10px",
                  margin: "10px 20px",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{backgroundColor: "black", width: "100%"}}/>
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}

                {def.synonyms && def.synonyms.length > 0 && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s, i) => `${s}${i < def.synonyms.length - 1 ? ', ' : ''}`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  )
}

export default Definitions