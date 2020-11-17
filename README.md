# LaunchDarkly Node Server SDK Feature Flag Example

## **What does it do?**

*Prints the feature flag value to the browser window*

## **How do I use it?**

*From the terminal:*

* `git clone https://github.com/SuperRockyCat/workramp-featureflag-example`
* `cd workramp-featureflag-example && npm install`
* `touch .env`
* `echo "LAUNCHDARKLY_SDK_KEY=<REPLACE WITH YOUR SDK KEY>" >> .env`

*From LaunchDarkly:*

* Create a new string flag called `super-cool-string` with as many variations as you want

*Back in the Terminal:*
* `npm start`