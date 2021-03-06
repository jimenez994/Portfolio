const mongoose = require("mongoose");

const RecommendationSchema = new mongoose.Schema({
    company: {
        type: String,
        default: "some company"
    },
    img: {
        type: String,
        default: "some image"
    },
    title: {
        type: String,
        default: "some title"
    },
    subTitle: {
        type: String,
        default: "some subtitle"
    },
    description: {
        type: String,
        default: "some description"
    },
    summary: {
        type: String,
        default: "some summary"
    },
    other: {
        type: String,
        default: "other"
    },
    editable: {
        type: Boolean,
        required: false
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        autopopulate: true
    }
}, { timestamps: true })
const Recommendation = mongoose.model("Recommendation", RecommendationSchema);