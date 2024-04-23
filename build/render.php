<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$tags = get_the_tags(get_the_ID());
if (!empty($tags)) {
    ?>
    <ul <?php echo get_block_wrapper_attributes(); ?>>
        <?php foreach ($tags as $tag) : ?>
            <li
                class="<?php esc_html($tag->slug); ?>"
                title="<?php esc_html($tag->name); ?>"
            ></li>
        <?php endforeach; ?>
    </ul>
    <?php
}
