import { z } from "zod";

const issueSchema = z.object(
    {
        title: z.string().min(1).max(255),
        description: z.string().min(1).max(255)
    }
)

const Schema = {
    issueSchema
}

export default Schema;