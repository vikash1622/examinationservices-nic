import React from 'react'

const Notes = () => {
    return (
        <div style={{
            marginTop: "30px"
        }}>
            <p className="s5" style={{ paddingTop: '1pt', paddingLeft: '6pt', textIndent: '0pt', textAlign: 'left' }}>Note :</p>
            <ol className="note-list">
                <li data-number="1">
                    <p style={{ paddingTop: '2pt', textIndent: '-7pt', textAlign: 'left' }}>
                        1. Percentile are based on the relative performance of all those who appeared for the examination.
                    </p>
                </li>
                <li data-number="2">
                    <p style={{ paddingTop: '3pt', textIndent: '-7pt', textAlign: 'left' }}>
                        2. The percentile of a candidate has been calculated as follows:
                    </p>
                    <p className="s5" style={{ paddingTop: '1pt', paddingLeft: '202pt', textIndent: '-54pt', lineHeight: '120%', textAlign: 'left' }}>
                        <u>100 X Number of candidates appeared in the examination with raw score LESS than the candidate</u><br />
                        Total number of candidates who appeared in the examination
                    </p>
                </li>
                <li data-number="3">
                    <p style={{ paddingTop: '1pt', textIndent: '-7pt', textAlign: 'left' }}>
                        3. The percentile is NOT the same as the percentage of marks obtained.
                    </p>
                </li>
                <li data-number="4">
                    <p style={{ paddingTop: '1pt', textIndent: '-7pt', textAlign: 'left' }}>
                        4. Total percentile is NOT an aggregate or average of the percentile of individual subjects.
                    </p>
                </li>
            </ol>
            <div style={{
                background: "#002041",
                padding: '10px',
                color: "#fff",
                marginTop:"15pt"
            }}>
                Disclaimer: Neither NIC nor NTA is responsible for any inadvertent error that may have crept in the results being published on NET. The results published on net are for Immediate information to the examinees.
            </div>
        </div>
    );
}

export default Notes
