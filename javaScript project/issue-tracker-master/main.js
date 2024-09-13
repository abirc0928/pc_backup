document.getElementById('issueInputForm').addEventListener('submit', submitIssue);

function submitIssue(e) {
  const getInputValue = id => document.getElementById(id).value;
  const description = getInputValue('issueDescription');
  const severity = getInputValue('issueSeverity');
  const assignedTo = getInputValue('issueAssignedTo');
  const id = Math.floor(Math.random() * 100000000) + '';
  const status = 'Open';

  const issue = { id, description, severity, assignedTo, status };
  let issues = [];
  if (localStorage.getItem('issues')) {
    issues = JSON.parse(localStorage.getItem('issues'));
  }
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));

  document.getElementById('issueInputForm').reset();
  fetchIssues();
  countIssues() 
  e.preventDefault();
}

const closeIssue = id => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const currentIssue = issues.find(issue => issue.id == id);
  currentIssue.status = 'Closed';
  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
  countIssues("close") 

}

const deleteIssue = id => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const remainingIssues = issues.filter(issue => issue.id != id)
  localStorage.setItem('issues', JSON.stringify(remainingIssues));
  fetchIssues();
  countIssues() 
}


const fetchIssues = (btnType) => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const issuesList = document.getElementById('issuesList');
  issuesList.innerHTML = '';

  for (var i = 0; i < issues.length; i++) {
    const { id, description, severity, assignedTo, status } = issues[i];

    if (status == 'Closed') {
      issuesList.innerHTML += `<div class="well">
      <h6>Issue ID: ${id} </h6>
      <p><span class="label label-info"> ${status} </span></p>
      <h3><s> ${description} </s></h3>
      <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
      <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
      <a href="#" onclick="closeIssue(${id})" class="btn btn-warning" disabled>Close</a>
      <a href="#" onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
      </div>`;

    } else {
      issuesList.innerHTML += `<div class="well">
      <h6>Issue ID: ${id} </h6>
      <p><span class="label label-info"> ${status} </span></p>
      <h3> ${description} </h3>
      <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
      <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
      <a href="#" onclick="closeIssue(${id})" class="btn btn-warning">Close</a>
      <a href="#" onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
      </div>`;
    }

  }
}

function countIssues(btnType) {

const myArray = JSON.parse(localStorage.getItem('issues'));
const elementCounts = {};
const closeCount = []
myArray.forEach(element => {
  if(element.status == 'Closed') {
    closeCount.push(element)
  }
 
});
document.getElementById('close').innerText = closeCount.length
document.getElementById('total').innerText = myArray.length
}

