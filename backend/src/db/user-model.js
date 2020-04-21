import { createModel, ObjectId } from "./helpers"

const userSchema = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  preferredPosition: { type: String },
  boards: [{ type: ObjectId, ref: "board" }],
  sharedBoards: [{ type: ObjectId, ref: "board" }],
  recentSearches: [{ type: String }],
  jobSources: [{ type: ObjectId, ref: "jobSource" }],
  feeds: [{ type: ObjectId, ref: "feed" }],
  resumes: [{ type: ObjectId, ref: "resume" }],
  coverLetters: [{ type: ObjectId, ref: "coverLetter" }],
}
const User = createModel("user", userSchema)

export default User
