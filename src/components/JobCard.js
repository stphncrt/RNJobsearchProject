import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {JobCardStyle} from '../styles';

const JobCard = props => {
  return (
    <View style={JobCardStyle.container}>
      <TouchableOpacity>
        <View style={JobCardStyle.textContainer}>
          <Text style={JobCardStyle.text}>{props.job.title}</Text>
        </View>
        <View style={JobCardStyle.textContainer}>
          <Text>
            {props.job.type}/ {props.job.location}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export {JobCard};

// company: "Music Theatre International"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBditjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8b7d75a39db271067003bd1c56dd314d0806f286/mtishowslogo.jpg"
// company_url: null
// created_at: "Wed Mar 17 21:33:20 UTC 2021"
// description: "<p>Junior Programmer for MTI</p>↵<p>Overview</p>↵<p>Responsible for overseeing the maintenance and troubleshooting of day-to-day digital projects as well as assisting the senior technical architect develop new digital initiatives across MTI’s digital infrastructure. This is an excellent position for someone who enjoys nuts and bolts programming, with a focus on Drupal, Classic ASP and ASP.net, with great potential for growth.</p>↵<p>Required Qualifications</p>↵<p>2+ years software development experience.</p>↵<p>Expertise in programming and debugging Drupal, LAMP stack, classic asp and asp.net environments. (VB Script and C#)  Familiarity with front-end technologies, including core JavaScript, jQuery, Drupal Templating, HTML and CSS.</p>↵<p>Experience offering creative and tactical problem-solving. Excellent verbal and written communication skills; including regular reporting to internal and external stakeholders.</p>↵<p>Process orientation, time sensitivity and goal orientation;  demonstrated ability to work collaboratively with leadership and support colleagues to deliver business results and to identify and resolve issues; proven problem solving skills, and the ability to interact with all levels of technical and non-technical staff.</p>↵<p>Expertise in building and maintaining software that extends MTI’s distribution and reach, including through data integrations with a variety of partners.</p>↵<p>Maintain and Expand Existing MTI Web Systems</p>↵<p>Assist with maintenance and troubleshooting of existing systems; expertise in Classic ASP, ASP .Net, Sql Server, VBScript, JavaScript, C# and Drupal.</p>↵<p>Tactical and Strategic Software Implementation</p>↵<p>Maintain and enhance any and all web systems. Those have included, in addition to the MyMTI .Net application, all LAMP architecture, PHP, MySql, Apache, JavaScript.</p>↵<p>Understand and enhance all data flows throughout MTI; gain facility and understanding with a custom platform-independent universal services layer that directs data to and among all MTI web systems and partners: Eurekasoft, Subplot, Drupal feeds, data recipients such as Disney Theatrical and Playbill;  production feeds from MTI AU and MTI Europe.</p>↵<p>Strategically, always be working toward better data structure, sharing, design, and integration among many sources.</p>↵<p>Education↵Bachelors preferred, candidates with significant relevant experience will be considered.</p>↵<p>This position is based in the heart of NYC's Theatre District, and in the future will require weekly in-office days.</p>↵<p>About Music Theatre International↵Music Theatre International (MTI) is one of the world's leading theatrical licensing agencies, granting theatres from around the world the rights to perform the greatest selection of musicals from Broadway and beyond. Founded in 1952 by composer Frank Loesser, and orchestrator Don Walker, MTI is a driving force in advancing musical theatre as a vibrant and engaging art form.</p>↵<p>MTI works directly with the composers, lyricists and book writers of these musicals to provide official scripts, musical materials and dynamic theatrical resources to over 70,000 professional, community and school theatres in the US and in over 60 countries worldwide.</p>↵"
// how_to_apply: "<p>Email resume and cover letter to <a href="mailto:employment@mtishows.com">employment@mtishows.com</a></p>↵"
// id: "8336ea3b-2da3-496e-87a6-3bbe380a2725"
// location: "New York, NY"
// title: "ASP, ASP.net, Drupal Developer for Music Theatre International"
// type: "Full Time"
// url: "https://jobs.github.com/positions/8336ea3b-2da3-496e-87a6-3bbe380a2725"
