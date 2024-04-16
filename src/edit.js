import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import { useEntityRecords} from "@wordpress/core-data";
import './editor.scss';
export default function edit(attributes) {

	// Finish Lang support
	// Add spinner : https://developer.wordpress.org/news/2023/05/19/useentityrecords-an-easier-way-to-fetch-wordpress-data/
	// See support for (colors, etc) https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/

	const tags_id = wp.data.select("core/editor").getEditedPostAttribute( 'tags' );
	const {hasResolved, records} = useEntityRecords('taxonomy', 'post_tag', {
		per_page: -1,
		include: tags_id,
		// post: postId,
	})

	const Stack = tag => <li className={tag.slug} title={tag.name}>{tag.name}</li>

	function RecordsList( { hasResolved, records } ) {
		if ( !hasResolved )
			return <Spinner />;
	
		if ( !records?.length ) 
			return <p>
				{ __( 'Gap Stacks – If you don\'t see anything, add some Tags on this post', 'gap-stacks' ) }
			</p>;
	
		return (
			<>
				{records.map(Stack)}
			</>
		);
  	}
	
	return (
		<ul { ...useBlockProps() }>
			<RecordsList hasResolved={ hasResolved } records={ records } />
		</ul>
	);
}
