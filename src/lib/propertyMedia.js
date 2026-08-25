import { supabase } from "./supabase";

const BUCKET = "property-media";

export function getPropertyMediaUrl(propertyFolder, fileName) {
  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(`${propertyFolder}/${fileName}`);

  return data.publicUrl;
}