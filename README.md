# LAB - Class 16

## Project: cloud-server

### Author: Jelani R

### Problem Domain

Deploy a simple Node.js server to EC2, using Elastic Beanstalk

Task 1:

- Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)
- Manually deploy your application to this environment by uploading a .zip file

Task 2:

- Using the same server, create a new environment using Elastic Beanstalk from your terminal
- Manually deploy your application to this environment by using eb deploy

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/Jchips/cloud-server/actions)
- [Pull Request](https://github.com/Jchips/cloud-server/pull/1)
- [GUI deploy](http://lab-16-env.eba-xdbdp7xd.us-west-2.elasticbeanstalk.com/)
- [CLI deploy](http://lab-16-env5.eba-3fm7mpzt.us-west-2.elasticbeanstalk.com/)

### Setup

#### `.env` requirements

- PORT=your-port-number

#### How to initialize/run the application

`nodemon` if installed, or `npm start`

#### Features / Routes

What was my key takeaway?

- My key takeaway is learning how to deploy web servers to AWS using Elastic Beanstalk on the console and also with the CLI.
- Process: Ran into some difficulties at first with both deployments, but got TA help.

Pull requests:

- <https://github.com/Jchips/cloud-server/pull/1>

#### Tests

- How do you run tests?
`npm test`
