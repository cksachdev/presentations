# presentations

Presentations using code surfer ⚡️

Question set creation from CSV file  
https://dist.cksachdev1.now.sh/

<CodeSurfer
title="ecml content"
code={require('!raw-loader!./code/ecml.js')}
lang="javascript"
showNumbers={true}
theme={dracula}
steps={[
{ notes: 'content.js' },
{ range: [6, 28], notes: 'only stage object in Worksheet' },
{ range: [12, 12], notes: 'generate new uuid for this stage using uuidv4' },
{ range: [5, 5], notes: 'Set stage[0] id as startstage id' },
{ range: [28, 28], notes: 'iterate through all question do ids' },
{
range: [18, 26],
notes: 'extract list of assets and populate in manifest media array',
},
{
range: [153, 157],
notes: 'same need to be populated in stage manifest media array',
},
]}
height="400"
/>

---
