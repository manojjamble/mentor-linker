const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    matchtest : {    
        teachstyle: {
            visual: { type: Boolean },
            auditory: { type: Boolean },
            kinesthetic: { type: Boolean }
        },
        communication: {
            recordedLecture: { type: Boolean },
            message: { type: Boolean },
            videoCall: { type: Boolean }
        },
        goal: {
            clarifyConcept: { type: Boolean },
            improveGrades: { type: Boolean },
            prepareForExam: { type: Boolean },
            careerGuidance: { type: Boolean }
        },
        availability: {
            _1_2: { type: Boolean },
            _3_5: { type: Boolean },
            _6: { type: Boolean }
        },
        experience: {
            _0: { type: Boolean },
            _2: { type: Boolean },
            _5: { type: Boolean }
        },
        subject: {
            aiml: { type: Boolean },
            webdev: { type: Boolean },
            appdev: { type: Boolean }
        },
        pace: {
            slow: { type: Boolean },
            moderate: { type: Boolean },
            fast: { type: Boolean }
        },
        teachingMethod: {
            exampleBased: { type: Boolean },
            interactionBased: { type: Boolean },
            problemBased: { type: Boolean }
        },
        mentoringExperience: {
            yes: { type: Boolean },
            no: { type: Boolean }
        },
        teachingChallenge: {
            learningStyle: { type: Boolean },
            timeManagement: { type: Boolean },
            studentEngagement: { type: Boolean }
        },
        studentCharacter: {
            enthusiastic: { type: Boolean },
            selfMotivated: { type: Boolean },
            curious: { type: Boolean }
        }
    }
});

const Mentor = mongoose.models.Mentor || mongoose.model('Mentor', mentorSchema);
export default Mentor;
